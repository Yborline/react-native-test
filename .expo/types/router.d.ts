/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/explore` | `/(tabs)/login` | `/(tabs)/register` | `/_sitemap` | `/explore` | `/login` | `/register`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
