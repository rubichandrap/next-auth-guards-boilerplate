import { NextPage } from "next";
import { ProtectedGuard, PublicGuard, RedirectGuard } from "~/guards";

export type GuardProps = {
  isTokenValid?: boolean;
};

export type GuardedNextPage = NextPage & {
  guard?: typeof PublicGuard | typeof ProtectedGuard | typeof RedirectGuard;
};
