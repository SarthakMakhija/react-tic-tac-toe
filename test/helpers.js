import { expect } from 'chai';
import { mount, render, shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

global.expect = expect;
global.mount = mount;
global.render = render;
global.shallow = shallow;

configure({ adapter: new Adapter() });

function noop () {
	return null;
}

require.extensions['.css'] = noop;