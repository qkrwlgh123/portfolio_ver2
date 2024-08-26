import { ForwardedRef, forwardRef } from "react";
import Style from "./componentLayout.style";
import { motion } from "framer-motion";

const ComponentLayout = forwardRef(
  (
    {
      title,
      bgColor,
      children,
      isWhiteTitle,
    }: {
      title: string;
      bgColor: string;
      children: React.ReactNode;
      isWhiteTitle?: boolean;
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Style.LayoutContainer $bgColor={bgColor} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <Style.TitleContainer
            {...(isWhiteTitle && { $isWhiteTitle: isWhiteTitle })}
          >
            <h1>{title}</h1>
          </Style.TitleContainer>
        </motion.div>

        <div>{children}</div>
      </Style.LayoutContainer>
    );
  }
);

export default ComponentLayout;
