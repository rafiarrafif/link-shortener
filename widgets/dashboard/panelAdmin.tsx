import { findUserById } from "@/entities/user/model/repository";
import DashboardGreetings from "./components/Greetings";
import DashboardControlLinks from "./components/DashboardControlLinks";

type Props = {
  jwtPayload: any;
};

export const PanelAdmin = async ({ jwtPayload }: Props) => {
  const userData = await findUserById(jwtPayload.data.id!);
  return (
    <div>
      <DashboardGreetings name={userData?.name} />
      <DashboardControlLinks links={userData?.generatedLinks} />
    </div>
  );
};
