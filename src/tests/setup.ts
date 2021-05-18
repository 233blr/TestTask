import {configure} from 'enzyme';
import * as Adapter from '@wojtekmaj/enzyme-adapter-react-17';
const adapter = Adapter as any;

configure({ adapter: new adapter() });