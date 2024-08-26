import { ForwardedRef, forwardRef } from "react";
import { dataList } from "../../data/project/dataList";
import ComponentLayout from "../../styles/layout/component/componentLayout";
import { ProjectComponentInterface } from "../../types/project";
import Style from "./project.style";
import ProjectComponent from "./projectComponent/projectComponent";
import { motion } from "framer-motion";

const Project = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <ComponentLayout
      title="PROJECT"
      bgColor="#4244ff"
      isWhiteTitle={true}
      ref={ref}
    >
      <Style.ContentsContainer>
        {dataList.map((project: ProjectComponentInterface) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <ProjectComponent key={project.title} project={{ ...project }} />
          </motion.div>
        ))}
      </Style.ContentsContainer>
    </ComponentLayout>
  );
});

export default Project;
