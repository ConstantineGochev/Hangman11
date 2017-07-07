module.exports = {
	attributes: {
  	id: {
  		primaryKey: true,
  		type: 'integer',
  		autoIncrement: true
  	},
  	wordGuessed: {
  		type: 'string',
      columnName: 'wordguessed'

  	},
	  gameWon: {
       type: 'boolean',
       required: true,
       columnName: 'gamewon'
    },
   	player: {
        model: 'user',
        required: true
    },
    guessesLeft: {
	     type: 'integer',
       columnName: 'guessesleft'   	
    }
	}
};
