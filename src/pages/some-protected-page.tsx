import React from "react";
import { ProtectedGuard } from "~/guards";
import type { GuardedNextPage } from "~/types/app";

const ProtectedPage: GuardedNextPage = (): JSX.Element => {
  return (
    <div>
      <h1>This is ProtectedPage</h1>
    </div>
  );
};

ProtectedPage.guard = ProtectedGuard;

export default ProtectedPage;
