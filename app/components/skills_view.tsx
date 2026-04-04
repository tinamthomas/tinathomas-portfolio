
import * as icons from 'simple-icons';
import { FancySkill } from './fancy-skill';
interface SkillIcon{
    path: string;
    title: string;
}
const skills: SkillIcon[] = [
    { path: icons.siReact.path, title: 'React' },
    { path: icons.siVuedotjs.path, title: 'Vue' },
    { path: icons.siTypescript.path, title: 'TypeScript' },
    { path: icons.siNodedotjs.path, title: 'Node.js' },
    { path: icons.siJavascript.path, title: 'JavaScript' },
    { path: icons.siKotlin.path, title: 'Kotlin' },
    { path: icons.siDotnet.path, title: '.NET' },
    { path: icons.siGoogle.path, title: 'GCP' },
    { path: icons.siDocker.path, title: 'Docker' },
    { path: icons.siGit.path, title: 'Git' },
    { path: icons.siKubernetes.path, title: 'K8s' },
    { path: icons.siDatabricks.path, title: 'Databricks' },
    { path: icons.siTerraform.path, title: 'Terraform' },
    { path: icons.siChef.path, title: 'Chef' },
    { path: icons.siSqlite.path, title: 'SQL' }
];

export default function SkillsView() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {skills.map((skill) => (
                <FancySkill key={skill.title} iconPath={skill.path} text={skill.title} />
            ))}
        </div>
    );
}