import { RootStackParamList } from "~/@types/routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
