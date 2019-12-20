module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable('book', {
			book_id: {allowNull: false, primaryKey: true, type: Sequelize.UUID},
			title: {allowNull: false, type: Sequelize.STRING},
			author: {allowNull: false, type: Sequelize.STRING},
			description: {allowNull: true, type: Sequelize.STRING},
			rating: {allowNull: false, type: Sequelize.INTEGER}
		}),

	down: (queryInterface, Sequelize) =>
		queryInterface.dropTable('book')
};