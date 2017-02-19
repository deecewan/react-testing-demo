/*
unfortunately, Jest declares everything as globals.
I really dislike this practice.  But not much we can do now.

You can also use standard `describe` and `it` syntax if your examples are more complex.
`test` is used because it's simpler.
*/

import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import App from './App';
import SubComponent from './SubComponent';

/* Demo One */
// test('should pass', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.text()).toBe('Hello, World!');
// });

/* Demo Two */
// test('should contain a `SubComponent`', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.find(SubComponent).length).toBe(1);
//   expect(wrapper.text()).toBe('Some sub component');
// });

/* Demo Three - Simulating events */
// test('should know what to do with a click', () => {
//   const mock = jest.fn();
//   const wrapper = shallow(<App onButtonClick={mock} />);
//   wrapper.find('button').simulate('click');
//   expect(mock.mock.calls.length).toBe(1);
// });

/* Demo Four - passing in props */
/* I'd usually use some kind of fixture for this */
// test('should render the correct thing based on props', () => {
//   const props = {
//     name: 'David',
//     age: 99,
//   };

//   const wrapper = shallow(<App {...props} />);
//   expect(wrapper.text()).toMatch(/David.*99/);
// });

/* Demo Five - a little more interesting */
// const ajaxFn = jest.fn(() => new Promise((resolve) => setTimeout(() => resolve('Demo Content!')), 100));

// const arbitraryTimeout = timeout => new Promise(resolve => setTimeout(resolve, timeout));

// test('the checkbox functionality works', async () => {
//   const mock = jest.fn(App.prototype.componentDidMount);
//   App.prototype.componentDidMount = mock; // not the best way to do this - I'd recommend Sinon spies
//   const wrapper = mount(<App callAjax={ajaxFn} />);
//   expect(mock.mock.calls.length).toBe(1);
//   expect(wrapper.find('input').prop('type')).toBe('checkbox');
//   expect(wrapper.find('p').length).toBe(2);

//   expect(ajaxFn.mock.calls.length).toBe(1);
//   expect(wrapper.find('#ajax-result').text()).toBe('')
//   await arbitraryTimeout(100);
//   expect(wrapper.find('#ajax-result').exists()).toBe(true);

//   const tick = wrapper.find('.tick');
//   expect(tick.hasClass('off')).toBe(true);
//   wrapper.find('[type="checkbox"]').simulate('change');
//   expect(tick.hasClass('off')).toBe(false);
//   expect(wrapper.state().currentlyChecked).toBe(true);
//   expect(tick.hasClass('on')).toBe(true);

//   // implements a *bunch* of stuff from jquery
//   const firstP = wrapper.find('p').first();
//   expect(firstP.find('span').text()).toBe('nested span');
//   expect(firstP.find('span').parents().length).toBe(2);

//   expect(wrapper.find('p').map(p => p.text())).toEqual([
//     'Demo Content 1nested span',
//     'Demo Content 2',
//   ]);

//   expect(wrapper.find('p > span').exists()).toBe(true);
//   expect(wrapper.find('p').at(1).text()).toBe('Demo Content 2'); // uses `at` not `eq`


//   // assert that the state looks a certain way
//   // simulate a bunch more clicks
//   Array.from(Array(5)).forEach(() => wrapper.find('input').simulate('change'));
//   // off, on, off, on, off

//   expect(wrapper.state()).toEqual({
//     currentlyChecked: false,
//     ajaxResult: 'Demo Content!',
//   });
// });

/* Demo Six - Jest Snapshot Rendering */
// test('SubComponent renders correctly', () => {
//   const tree = create(<SubComponent />);
//   expect(tree).toMatchSnapshot();
// });

// // super contrived example
// test('SubComponent captures class from props', () => {
//   expect(create(<SubComponent className="first" />)).toMatchSnapshot();
//   expect(create(<SubComponent className="second" />)).toMatchSnapshot();
//   expect(create(<SubComponent className="third" />)).toMatchSnapshot();
// });