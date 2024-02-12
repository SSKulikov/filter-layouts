export const ProjectList = ({projects}) => {
    return (
        <div>
            {projects.map((project, index) => (
                <img
                    key={index}
                    src={project.img} 
                    alt=""
                />
            ))}
        </div>
    )
}