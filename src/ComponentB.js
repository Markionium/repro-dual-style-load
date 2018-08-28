import * as styles from './ComponentB.module.less';

export default function ComponentB() {
    console.log('Component B!');
    const appElement = document.getElementById('app');
    const component = document.createElement('div');
    styles.ComponentB.split(' ').forEach(classname => component.classList.add(classname));

    appElement.appendChild(component);
}
