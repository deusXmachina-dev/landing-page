"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ROBOT_POWER_CONSUMPTION, CO2_EMISSIONS_FACTOR, ENERGY_SAVINGS_SCENARIOS } from "@/lib/constants";

const currency = new Intl.NumberFormat("cs-CZ", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const mwhFmt = new Intl.NumberFormat("cs-CZ", {
  maximumFractionDigits: 1,
});

const co2Fmt = new Intl.NumberFormat("cs-CZ", {
  maximumFractionDigits: 1,
});

interface EnergyCalculatorProps {
  className?: string;
}

export default function EnergyCalculator({ className = "" }: EnergyCalculatorProps) {
  const [smallRobotsText, setSmallRobotsText] = useState("50");
  const [mediumRobotsText, setMediumRobotsText] = useState("20");
  const [largeRobotsText, setLargeRobotsText] = useState("10");
  const [xlargeRobotsText, setXlargeRobotsText] = useState("2");
  const [energyCostText, setEnergyCostText] = useState("0.18");
  const [hoursText, setHoursText] = useState("5000");
  const [lifetimeText, setLifetimeText] = useState("5");

  const results = useMemo(() => {
    const parsedEnergyCost = parseFloat(energyCostText.replace(/,/g, "."));
    const parsedSmallRobots = parseFloat(smallRobotsText.replace(/,/g, "."));
    const parsedMediumRobots = parseFloat(mediumRobotsText.replace(/,/g, "."));
    const parsedLargeRobots = parseFloat(largeRobotsText.replace(/,/g, "."));
    const parsedXlargeRobots = parseFloat(xlargeRobotsText.replace(/,/g, "."));
    const parsedHours = parseFloat(hoursText.replace(/,/g, "."));
    const parsedLifetime = parseFloat(lifetimeText.replace(/,/g, "."));

    const energyCostPerKwh = isNaN(parsedEnergyCost) ? 0 : parsedEnergyCost;
    const smallRobots = isNaN(parsedSmallRobots) ? 0 : parsedSmallRobots;
    const mediumRobots = isNaN(parsedMediumRobots) ? 0 : parsedMediumRobots;
    const largeRobots = isNaN(parsedLargeRobots) ? 0 : parsedLargeRobots;
    const xlargeRobots = isNaN(parsedXlargeRobots) ? 0 : parsedXlargeRobots;
    const operatingHoursPerYear = isNaN(parsedHours) ? 0 : parsedHours;
    const lifetimeYears = isNaN(parsedLifetime) ? 0 : parsedLifetime;

    // Calculate total power consumption using constants
    const totalConsumptionKw = 
      smallRobots * ROBOT_POWER_CONSUMPTION.SMALL + 
      mediumRobots * ROBOT_POWER_CONSUMPTION.MEDIUM + 
      largeRobots * ROBOT_POWER_CONSUMPTION.LARGE + 
      xlargeRobots * ROBOT_POWER_CONSUMPTION.XLARGE;

    const baselineKwhPerYear = totalConsumptionKw * operatingHoursPerYear;
    const baselineCost = baselineKwhPerYear * energyCostPerKwh;
    const baselineMwhPerYear = baselineKwhPerYear / 1000;
    const baselineLifetimeCost = baselineCost * lifetimeYears;

    const scenarios = ENERGY_SAVINGS_SCENARIOS.map((pct) => {
      const factor = Math.max(0, 1 - pct / 100);
      const newKwhPerYear = baselineKwhPerYear * factor;
      const newCost = baselineCost * factor;
      const annualSavings = baselineCost - newCost;
      const lifetimeSavings = annualSavings * lifetimeYears;
      const energySavingsKwh = baselineKwhPerYear - newKwhPerYear;
      const totalEnergySavingsMwh = (energySavingsKwh / 1000) * lifetimeYears;
      const co2SavingsTons = totalEnergySavingsMwh * CO2_EMISSIONS_FACTOR;
      const savingsPercent = baselineCost > 0 ? (annualSavings / baselineCost) * 100 : 0;
      return {
        pct,
        newKwhPerYear,
        newMwhPerYear: newKwhPerYear / 1000,
        newCost,
        annualSavings,
        lifetimeSavings,
        energySavingsMwh: energySavingsKwh / 1000,
        totalEnergySavingsMwh,
        co2SavingsTons,
        savingsPercent,
        highlight: pct === 20,
        assumed: pct === 20,
      };
    });

    return {
      baselineKwhPerYear,
      baselineMwhPerYear,
      baselineCost,
      baselineLifetimeCost,
      lifetimeYears,
      scenarios,
    };
  }, [energyCostText, smallRobotsText, mediumRobotsText, largeRobotsText, xlargeRobotsText, hoursText, lifetimeText]);

  return (
    <section id="calculator" className={`py-20 px-4 md:px-6 bg-slate-50 dark:bg-slate-800 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <Suspense fallback={null}>
          <UrlSync
            smallRobotsText={smallRobotsText}
            mediumRobotsText={mediumRobotsText}
            largeRobotsText={largeRobotsText}
            xlargeRobotsText={xlargeRobotsText}
            energyCostText={energyCostText}
            hoursText={hoursText}
            lifetimeText={lifetimeText}
            setSmallRobotsText={setSmallRobotsText}
            setMediumRobotsText={setMediumRobotsText}
            setLargeRobotsText={setLargeRobotsText}
            setXlargeRobotsText={setXlargeRobotsText}
            setEnergyCostText={setEnergyCostText}
            setHoursText={setHoursText}
            setLifetimeText={setLifetimeText}
          />
        </Suspense>
        <header className="mb-8 md:mb-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Calculate Your Potential Savings
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Enter your robot fleet details to see estimated energy and cost savings
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-4 lg:gap-5 lg:items-start">
          <div className="lg:h-full">
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 md:p-5 bg-white dark:bg-black shadow-sm lg:h-full flex flex-col">
              <div className="space-y-4 flex-1">
                <div className="pb-3 border-b border-black/10 dark:border-white/10">
                  <h3 className="text-base font-semibold mb-0.5">Robot Fleet</h3>
                  <p className="text-[11px] text-black/50 dark:text-white/50">Robots by payload</p>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <Field
                    label="Small (< 16 kg)"
                    value={smallRobotsText}
                    min={0}
                    step="1"
                    type="text"
                    onChange={setSmallRobotsText}
                  />
                  <Field
                    label="Medium (< 60 kg)"
                    value={mediumRobotsText}
                    min={0}
                    step="1"
                    type="text"
                    onChange={setMediumRobotsText}
                  />
                  <Field
                    label="Large (< 225 kg)"
                    value={largeRobotsText}
                    min={0}
                    step="1"
                    type="text"
                    onChange={setLargeRobotsText}
                  />
                  <Field
                    label="XLarge (> 225 kg)"
                    value={xlargeRobotsText}
                    min={0}
                    step="1"
                    type="text"
                    onChange={setXlargeRobotsText}
                  />
                </div>

                <div className="pt-3 border-t border-black/10 dark:border-white/10">
                  <h3 className="text-base font-semibold mb-0.5">Parameters</h3>
                  <p className="text-[11px] text-black/50 dark:text-white/50 mb-3">Operating conditions</p>
                  <div className="space-y-2.5">
                    <Field
                      label="Energy cost (€/kWh)"
                      value={energyCostText}
                      min={0}
                      step="0.01"
                      type="text"
                      onChange={setEnergyCostText}
                    />
                    <Field
                      label="Operating hours/year"
                      value={hoursText}
                      min={0}
                      step="1"
                      type="text"
                      onChange={setHoursText}
                    />
                    <div>
                      <Field
                        label="Investment horizon (yr)"
                        value={lifetimeText}
                        min={0}
                        step="1"
                        type="text"
                        onChange={setLifetimeText}
                      />
                      <p className="mt-1 text-[10px] text-black/50 dark:text-white/50">
                        Duration the solution will be deployed (e.g., production line lifetime)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:h-full">
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 md:p-6 bg-white dark:bg-black shadow-sm lg:h-full flex flex-col">
              <div className="pb-3 border-b border-black/10 dark:border-white/10 mb-5">
                <h3 className="text-base font-semibold mb-0.5">Projected Savings</h3>
                <p className="text-[11px] text-black/50 dark:text-white/50">Total over {results.lifetimeYears}-year period</p>
              </div>
              <div className="overflow-x-auto mb-1 flex-1">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-black/10 dark:border-white/10">
                      <th className="pb-2 md:pb-2.5 pl-2 md:pl-3 pr-2 md:pr-3 text-left font-medium text-[10px] md:text-[11px] uppercase tracking-wider text-black/60 dark:text-white/60">Energy Savings*</th>
                      <th className="pb-2 md:pb-2.5 pr-2 md:pr-3 text-left font-semibold text-[10px] md:text-[11px] uppercase tracking-wider text-black/70 dark:text-white/70">CO₂ Avoided (tCO₂e)</th>
                      <th className="pb-2 md:pb-2.5 pr-2 md:pr-3 text-right font-semibold text-[10px] md:text-[11px] uppercase tracking-wider text-black/70 dark:text-white/70">Cost Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.scenarios.map((s) => (
                      <ScenarioRow
                        key={s.pct}
                        improvement={`${s.pct}%`}
                        co2Savings={co2Fmt.format(s.co2SavingsTons)}
                        lifetimeSavings={currency.format(s.lifetimeSavings)}
                        highlight={s.highlight}
                        assumed={s.assumed}
                      />
                    ))}
                  </tbody>
                </table>
                <div className="mt-5 pt-4 border-t border-black/10 dark:border-white/10 text-[11px] text-black/60 dark:text-white/60">
                  *Power consumption estimates based on typical manufacturer values. Actual values may vary by model and operating conditions.
                </div>
              </div>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-black/10 dark:border-white/10 text-center">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Sounds Interesting?</h2>
                <p className="text-sm md:text-base text-black/60 dark:text-white/60 mb-5 md:mb-6">
                  Let&apos;s discuss how we can help optimize your robot fleet and achieve these savings.
                </p>
                <ContactButton results={results} />
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}

function UrlSync({
  smallRobotsText,
  mediumRobotsText,
  largeRobotsText,
  xlargeRobotsText,
  energyCostText,
  hoursText,
  lifetimeText,
  setSmallRobotsText,
  setMediumRobotsText,
  setLargeRobotsText,
  setXlargeRobotsText,
  setEnergyCostText,
  setHoursText,
  setLifetimeText,
}: {
  smallRobotsText: string;
  mediumRobotsText: string;
  largeRobotsText: string;
  xlargeRobotsText: string;
  energyCostText: string;
  hoursText: string;
  lifetimeText: string;
  setSmallRobotsText: (v: string) => void;
  setMediumRobotsText: (v: string) => void;
  setLargeRobotsText: (v: string) => void;
  setXlargeRobotsText: (v: string) => void;
  setEnergyCostText: (v: string) => void;
  setHoursText: (v: string) => void;
  setLifetimeText: (v: string) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const sr = searchParams.get("sr");
    const mr = searchParams.get("mr");
    const lr = searchParams.get("lr");
    const xr = searchParams.get("xr");
    const ec = searchParams.get("ec");
    const h = searchParams.get("h");
    const lt = searchParams.get("lt");
    
    // Set state from query params if they exist
    if (sr !== null) setSmallRobotsText(sr);
    if (mr !== null) setMediumRobotsText(mr);
    if (lr !== null) setLargeRobotsText(lr);
    if (xr !== null) setXlargeRobotsText(xr);
    if (ec !== null) setEnergyCostText(ec);
    if (h !== null) setHoursText(h);
    if (lt !== null) setLifetimeText(lt);
    
    // Clear query params from URL after reading
    if (searchParams.toString()) {
      router.replace(pathname, { scroll: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

function Field({
  label,
  value,
  onChange,
  step,
  min,
  max,
  type = "number",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  step?: string;
  min?: number;
  max?: number;
  type?: "text" | "number";
}) {
  return (
    <label className="block">
      <span className="block text-[11px] md:text-xs font-medium text-black/70 dark:text-white/70 mb-1">{label}</span>
      <input
        type={type}
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        step={step}
        min={min}
        max={max}
        className="w-full rounded-lg border border-black/15 dark:border-white/15 bg-black/[.02] dark:bg-white/[.02] px-2.5 md:px-3 py-2 md:py-2.5 text-sm md:text-base outline-none transition-all focus:border-black/30 dark:focus:border-white/30 focus:bg-transparent"
      />
    </label>
  );
}

function ScenarioRow({
  improvement,
  co2Savings,
  lifetimeSavings,
  highlight,
  assumed,
}: {
  improvement: string;
  co2Savings: string;
  lifetimeSavings: string;
  highlight?: boolean;
  assumed?: boolean;
}) {
  return (
    <tr className={`border-b border-black/5 dark:border-white/5 transition-colors ${highlight ? "bg-primary/10" : "hover:bg-black/[.02] dark:hover:bg-white/[.02]"}`}>
      <td className={`py-3 md:py-4 pl-2 md:pl-3 pr-2 md:pr-3 ${assumed ? "font-bold" : ""}`}>
        <div className="flex items-center gap-2">
          <span className={`text-sm md:text-base whitespace-nowrap`}>{improvement}</span>
          {assumed ? (
            <span className="inline-flex items-center rounded-full bg-primary/20 border border-primary/30 px-1.5 md:px-2 py-0.5 text-[9px] md:text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">Typical</span>
          ) : null}
        </div>
      </td>
      <td className={`py-3 md:py-4 pr-2 md:pr-3 text-sm md:text-base tabular-nums ${assumed ? "font-bold" : ""}`}>{co2Savings}</td>
      <td className={`py-3 md:py-4 pr-2 md:pr-3 text-right text-sm md:text-base tabular-nums ${assumed ? "font-bold" : ""}`}>{lifetimeSavings}</td>
    </tr>
  );
}

function ContactButton({ results }: { results: { baselineMwhPerYear: number; baselineCost: number; baselineLifetimeCost: number; lifetimeYears: number; scenarios: Array<{ pct: number; lifetimeSavings: number; co2SavingsTons: number; totalEnergySavingsMwh: number }> } }) {
  const typicalScenario = results.scenarios.find(s => s.pct === 20);
  
  const emailSubject = "Energy Optimization Inquiry";
  const emailBody = `Hi,

I've used your Energy Savings Calculator and would like to learn more about your robot fleet optimization solution.

Here are my projected savings:

Baseline Energy Consumption: ${mwhFmt.format(results.baselineMwhPerYear)} MWh/year
Baseline Annual Cost: ${currency.format(results.baselineCost)}
Investment Horizon: ${results.lifetimeYears} years

Projected Savings (typical 20% improvement):
• Lifetime Cost Savings: ${typicalScenario ? currency.format(typicalScenario.lifetimeSavings) : 'N/A'}
• Total Energy Saved: ${typicalScenario ? mwhFmt.format(typicalScenario.totalEnergySavingsMwh) : 'N/A'} MWh
• CO₂ Avoided: ${typicalScenario ? co2Fmt.format(typicalScenario.co2SavingsTons) : 'N/A'} tCO₂e

I would like to discuss how your solution can help optimize my robot fleet.

Best regards`;

  const mailtoLink = `mailto:hello@deusxmachina.dev?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <a
      href={mailtoLink}
      className="inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-2.5 rounded-lg bg-primary text-primary-foreground text-sm md:text-base font-semibold hover:bg-primary-hover transition-colors whitespace-nowrap shadow-sm"
    >
      Let&apos;s get in touch
    </a>
  );
}
