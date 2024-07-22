import Style from "./globalLayout.style";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Style.OuterLayout>
      <Style.InnerLayout>{children}</Style.InnerLayout>
    </Style.OuterLayout>
  );
};

export default GlobalLayout;
