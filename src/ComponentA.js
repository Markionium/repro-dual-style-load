import * as styles from './ComponentA.module.less';

export default function ComponentA() {
    console.log('Component A!');
    const appElement = document.getElementById('app');
    const component = document.createElement('div');
    styles.ComponentA.split(' ').forEach(classname => component.classList.add(classname));

    appElement.appendChild(component);
}
