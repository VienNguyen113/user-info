import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export User, { schema } from './model'

const router = new Router()
const { firstName, lastName, company, department, position, email } = schema.tree

/**
 * @api {post} /users Create user
 * @apiName CreateUser
 * @apiGroup User
 * @apiParam firstName User's firstName.
 * @apiParam lastName User's lastName.
 * @apiParam company User's company.
 * @apiParam department User's department.
 * @apiParam position User's position.
 * @apiParam email User's email.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 */
router.post('/',
  body({ firstName, lastName, company, department, position, email }),
  create)

/**
 * @api {get} /users Retrieve users
 * @apiName RetrieveUsers
 * @apiGroup User
 * @apiUse listParams
 * @apiSuccess {Object[]} users List of users.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /users/:id Retrieve user
 * @apiName RetrieveUser
 * @apiGroup User
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /users/:id Update user
 * @apiName UpdateUser
 * @apiGroup User
 * @apiParam firstName User's firstName.
 * @apiParam lastName User's lastName.
 * @apiParam company User's company.
 * @apiParam department User's department.
 * @apiParam position User's position.
 * @apiParam email User's email.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 */
router.put('/:id',
  body({ firstName, lastName, company, department, position, email }),
  update)

/**
 * @api {delete} /users/:id Delete user
 * @apiName DeleteUser
 * @apiGroup User
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 User not found.
 */
router.delete('/:id',
  destroy)

export default router
