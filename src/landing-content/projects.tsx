import styles from '../styles/Projects.module.css'
import PROJECTS from '../data/projects';

const Projects = () => {
    return (
        <div id="projects" className={styles.projectsContainer}>
            <div className={styles.heading}>Projects</div>
            <div className={styles.projectsEntryContainer}>
                {
                    PROJECTS.map((project, index) => {
                        return (
                            <div key={index} className={styles.projectSection}>
                                <div className={styles.projectHeading}>{project.title}</div>
                                <div className={styles.projectDesc}>{project.desc}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects



