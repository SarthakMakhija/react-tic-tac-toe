import React from 'react'
import Board from '../src/components/Board'

describe('<Board />', function(){

	it("should initialize the state with number of squares", function () {
		const board = shallow(<Board/>);

		expect(board.state("currentSymbol")).to.be.equal("X");
		expect(board.state("gameOver")).to.be.equal(false);
		expect(board.state("squares")).to.deep.equal(Array(9).fill(null));
	});

	it("should render 9 Squares", function () {
		const board = shallow(<Board/>);

		expect(board.find('Square')).to.have.length(9);
	});

	it("should display current symbol", function () {
		const board = shallow(<Board/>);

		expect(board.find('.banner').children()).to.have.length(1);
		expect(board.find('.banner').children().at(0).find('strong').children().at(0).text()).to.be.equal("X");
	});

	it("should display Game Over given game is over", function () {
		const board = shallow(<Board/>);
		const state = {
			"gameOver"        : true
		};

		board.setState({...state});

		expect(board.find('.banner').children()).to.have.length(1);
		expect(board.find('.banner').children().at(0).find('strong').children().at(0).text()).to.be.equal("Game Over !!");
	});


	it("should set game over to true", function () {
		const board = shallow(<Board/>);
		const state = {
			"squares"         : ["X", "X", null, null, null, null, null, null, null],
			"gameOver"        : false,
			"currentSymbol"   : "X"
		};

		board.setState({...state});
		board.instance().setSymbolAt(2);

		expect(board.state("gameOver")).to.be.equal(true);
		expect(board.state("currentSymbol")).to.be.equal("0");
		expect(board.state("squares")).to.deep.equal(["X", "X", "X", null, null, null, null, null, null]);
	});

	it("should not set game over to true", function () {
		const board = shallow(<Board/>);
		const state = {
			"squares"         : ["X", "X", null, null, null, null, null, null, null],
			"gameOver"        : false,
			"currentSymbol"   : "X"
		};

		board.setState({...state});
		board.instance().setSymbolAt(5);

		expect(board.state("gameOver")).to.be.equal(false);
		expect(board.state("currentSymbol")).to.be.equal("0");
		expect(board.state("squares")).to.deep.equal(["X", "X", null, null, null, "X", null, null, null]);
	});

});


