module.exports = (sequelize, DataTypes) => {

	/**
	 * Book model
	 */
	const Book = sequelize.define('book', {
		book_id: {allowNull: false, primaryKey: true, type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4},
		title: DataTypes.STRING,
		description: DataTypes.STRING,
		rating: DataTypes.INTEGER
	}, {freezeTableName: true, timestamps: false});

	/**
	 * For associations
	 */
	Book.associate = models => {
	};

	return Book;
};