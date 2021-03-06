import { Loading } from "components";
import { useAuth } from "hooks/auth";
import React, { useCallback, useEffect, useState } from "react";
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom";
import { parseISO, isAfter } from "date-fns";

interface PrivateRouteParams extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

export function PrivateRoute({
  component: Component,
  ...rest
}: PrivateRouteParams) {
  const [isLoading, setIsLoading] = useState(true);
  const { token, loadUserStorageData, expiresAt } = useAuth();

  const fetchData = useCallback(async () => {
    await loadUserStorageData();
    setIsLoading(false);
  }, [loadUserStorageData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Route
          {...rest}
          render={(props) =>
            token && expiresAt && isAfter(parseISO(expiresAt), new Date()) ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            )
          }
        />
      )}
    </>
  );
}