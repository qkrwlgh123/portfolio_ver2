import Style from "./globalLayout.style";
// 1. Outer - 가운데로 모아주기

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Style.OuterLayout>
      <Style.InnerLayout>{children}</Style.InnerLayout>
    </Style.OuterLayout>
  );
};

export default GlobalLayout;
