import BookService from '../services/BookService';
import Util from '../utils/Utils';
import {isUUID, isInt} from '../utils/validate';

const util = new Util();

class PolicyController {

	/**
	 * get all book control - validate and catch error
	 *
	 * @param {Object} req - request
	 * @param {Object} res - response
	 * @returns {Promise<*>}
	 */
	static async getAll(req, res) {
		try {
			const policies = await BookService.getAll();

			if (policies.length > 0)
				util.setSuccess(200, 'Books Received', policies);
			else util.setSuccess(200, 'No Book found');

			return util.send(res);
		} catch (error) {
			util.setError(400, error);
			return util.send(res);
		}
	}

	/**
	 * add book control - validate and catch error
	 *
	 * @param {Object} req - request
	 * @param {Object} res - response
	 * @returns {Promise<*>}
	 */
	static async add(req, res) {

		if (!req.body.title || !req.body.rating) {
			util.setError(400, 'Incomplete information');
			return util.send(res);
		}

		try {
			const policy = await BookService.add(req.body);
			util.setSuccess(201, 'Book Added', policy);
			return util.send(res);
		} catch (error) {
			util.setError(400, error.message);
			return util.send(res);
		}
	}

	/**
	 * update book control - validate and catch error
	 *
	 * @param {Object} req - request
	 * @param {Object} res - response
	 * @returns {Promise<*>}
	 */
	static async update(req, res) {
		const data = req.body, {id} = req.params;

		if (!id || !isUUID(id)) {
			util.setError(400, 'Invalid UUID');
			return util.send(res);
		} else if (data.rating && !isInt(data.rating)) {
			util.setError(400, 'Invalid rating value');
			return util.send(res);
		}

		try {
			const policy = await BookService.update(id, data);

			if (!policy)
				util.setError(404, `Book with the id ${id} cannot be found`);
			else util.setSuccess(200, 'Book updated', policy);

			return util.send(res);
		} catch (error) {
			util.setError(404, error);
			return util.send(res);
		}
	}

	/**
	 * get book control - validate and catch error
	 *
	 * @param {Object} req - request
	 * @param {Object} res - response
	 * @returns {Promise<*>}
	 */
	static async get(req, res) {
		const {id} = req.params;

		if (!id || !isUUID(id)) {
			util.setError(400, 'Invalid UUID');
			return util.send(res);
		}

		try {
			const policy = await BookService.get(id);

			if (!policy)
				util.setError(404, `Book with the id ${id} cannot be found`);
			else util.setSuccess(200, 'Book Found', policy);

			return util.send(res);
		} catch (error) {
			util.setError(404, error);
			return util.send(res);
		}
	}

	/**
	 * remove book control - validate and catch error
	 *
	 * @param {Object} req - request
	 * @param {Object} res - response
	 * @returns {Promise<*>}
	 */
	static async remove(req, res) {
		const {id} = req.params;

		if (!id || !isUUID(id)) {
			util.setError(400, 'Invalid UUID');
			return util.send(res);
		}

		try {
			const policy = await BookService.remove(id);

			if (policy)
				util.setSuccess(200, 'Book deleted');
			else util.setError(404, `Book with the id ${id} cannot be found`);

			return util.send(res);
		} catch (error) {
			util.setError(400, error);
			return util.send(res);
		}
	}
}

export default PolicyController;