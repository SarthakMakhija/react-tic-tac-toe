import React from 'react'
import sinon from 'sinon'
import Square from '../src/components/Square'

describe('<Square />', function(){
	
	it('should render the provided symbol - X', function () {
		const props = {
			"symbol":{
				"value": "X"
			}
		};
		const square = shallow(<Square {...props} />);
		expect(square.find('strong')).to.have.length(1);
		expect(square.find('strong').children().at(0).text()).to.equal("X");
	});

	it('should render the provided symbol - 0', function () {
		const props = {
			"symbol":{
				"value": "0"
			}
		};
		const square = shallow(<Square {...props} />);
		expect(square.find('strong')).to.have.length(1);
		expect(square.find('strong').children().at(0).text()).to.equal("0");
	});

	it('should return the index of the square when clicked', function () {
		const handleClickStub = sinon.spy();
		const square          = shallow(<Square symbol={{index: 0}} clickCallBack={handleClickStub} />);

		square.simulate('click');
		expect(handleClickStub.calledOnce).to.be.true;
		expect(handleClickStub.calledWith(0)).to.be.true;
	});

});
