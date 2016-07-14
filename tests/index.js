import { Piece } from '../src/game'
import { expect, assert } from 'chai'

describe('Piece', function() {

	const piece = new Piece('name', 'team');

	it('should do things...', function() {
		assert.equal(piece.name, 'name')
	})
})
