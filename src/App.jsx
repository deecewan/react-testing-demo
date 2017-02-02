import React, { Component } from 'react';
import SubComponent from './SubComponent';

/* Demo One */
// export default function App() {
//   return (<div>Hello, World!</div>);
// }

/* Demo Two */
// export default function App() {
//   return (<div><SubComponent /></div>);
// }

/* Demo Three */
// export default function App(props) {
//   return (<div><button onClick={props.onButtonClick}>Click Me!</button></div>);
// }

/* Demo Four */
// export default function App(props) {
//   return (<div>Hello, {props.name}.  You're {props.age} years old.</div>);
// }

/* Demo Five */
/* Maybe a little less trivial */
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentlyChecked: false,
//     };
//     this.checkBoxChanged = this.checkBoxChanged.bind(this);
//   }

//   checkBoxChanged() {
//     this.setState({ currentlyChecked: !this.state.currentlyChecked })
//   }

//   async componentDidMount() {
//     // maybe something cool happens in here?  lets load some content via an ajax call
//     this.setState({ ajaxResult: await this.props.callAjax() });
//   }

//   render() {
//     const { currentlyChecked, ajaxResult } = this.state;
//     return (
//       <div>
//         The checkbox is currently { do {
//           if (currentlyChecked) {
//             'checked';
//           } else {
//             'not checked';
//           }
//         } }
//         <input type="checkbox" onChange={this.checkBoxChanged} />
//         <span className={['tick', currentlyChecked ? 'on' : 'off'].join(' ')} />
//         <div id="ajax-result">{ ajaxResult ? `The result of the ajax call was ${ajaxResult}` : '' }</div>
//         <p>Demo Content 1<span>nested span</span></p>
//         <p>Demo Content 2</p>
//       </div>
//     );
//   }
// }