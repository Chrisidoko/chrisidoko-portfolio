import type { ReactNode } from "react";

/* Post-specific diagrams for the Gombe revenue platform write-up.
   Plain Tailwind boxes so they reflow on phones and follow the theme. */

const mono = "font-mono text-[11px] tracking-[0.15em] uppercase text-zinc-500";

function Box({
  title,
  children,
  accent = false,
}: {
  title: string;
  children?: ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 text-base leading-6 ${
        accent
          ? "border-[#3f5cf2] bg-[#3f5cf2]/5 dark:border-[#8b9bff] dark:bg-[#8b9bff]/10"
          : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
      }`}
    >
      <p className="font-semibold text-zinc-900 dark:text-zinc-50">{title}</p>
      {children && (
        <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {children}
        </p>
      )}
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-2 text-zinc-400" aria-hidden="true">
      {label && <span className={mono}>{label}</span>}
      <span className="text-xl leading-none">↓</span>
    </div>
  );
}

export function Architecture() {
  return (
    <figure className="my-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-[#0c0c0f] sm:p-6">
      {/* Two lanes (payer → service), side by side on desktop, stacked on phones */}
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-0">
        <div className="flex flex-col sm:row-span-4 sm:grid sm:grid-rows-subgrid">
          <p className={`${mono} mb-2`}>Schools</p>
          <div className="[&>div]:h-full">
            <Box title="Private tertiary institutions">
              Schools, through their portal
            </Box>
          </div>
          <Arrow label="portal" />
          <div className="[&>div]:h-full">
            <Box title="Revenue platform" accent>
              System of record: registration, notices, tax declarations,
              approvals, Credo checkout
            </Box>
          </div>
        </div>
        <div className="flex flex-col sm:row-span-4 sm:grid sm:grid-rows-subgrid">
          <p className={`${mono} mb-2`}>Other institutions</p>
          <div className="[&>div]:h-full">
            <Box title="External partners">
              Market unions, MDAs, through their own systems
            </Box>
          </div>
          <Arrow label="HMAC-signed API" />
          <div className="[&>div]:h-full">
            <Box title="Payments gateway" accent>
              One hosted checkout, gateway-agnostic, Credo + Interswitch behind
              one contract
            </Box>
          </div>
        </div>
      </div>

      <Arrow label="confirmed payments only" />

      <Box title="Shared statewide transaction ledger">
        One PostgreSQL ledger, every confirmed payment tagged with its Head and
        Sub-Head
      </Box>

      <Arrow label="read-only" />

      <Box title="Executive dashboard">
        Never writes, so its numbers can be trusted. New payers show up with
        zero changes.
      </Box>

      <figcaption className={`${mono} mt-4 text-center normal-case tracking-normal`}>
        Three services, one ledger
      </figcaption>
    </figure>
  );
}

export function Reconciliation() {
  return (
    <figure className="my-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-[#0c0c0f] sm:p-6">
      <p className={`${mono} mb-2`}>Three triggers</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <Box title="Webhook">The provider says it&rsquo;s paid</Box>
        <Box title="Return page">The payer lands back on our site</Box>
        <Box title="Poll">The partner or page asks again</Box>
      </div>

      <Arrow label="all call the same function" />

      <Box title="Verify directly with the provider" accent>
        Ignore what the trigger claims. Ask the gateway for the real status, and
        check the amount matches what was billed.
      </Box>

      <Arrow />

      <div className="grid gap-3 sm:grid-cols-2">
        <Box title="Paid and amount matches">
          Mark paid (only ever unpaid → paid), write to the ledger, notify the
          partner
        </Box>
        <Box title="Anything else">
          No-op. The payment stays unpaid and the next trigger checks again.
        </Box>
      </div>

      <figcaption className={`${mono} mt-4 text-center normal-case tracking-normal`}>
        One reconciliation path, safe to run any number of times
      </figcaption>
    </figure>
  );
}
