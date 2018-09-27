import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { User } from '.'

const app = () => express(apiRoot, routes)

let user

beforeEach(async () => {
  user = await User.create({})
})

test('POST /users 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ firstName: 'test', lastName: 'test', company: 'test', department: 'test', position: 'test', email: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.firstName).toEqual('test')
  expect(body.lastName).toEqual('test')
  expect(body.company).toEqual('test')
  expect(body.department).toEqual('test')
  expect(body.position).toEqual('test')
  expect(body.email).toEqual('test')
})

test('GET /users 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /users/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${user.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(user.id)
})

test('GET /users/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /users/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${user.id}`)
    .send({ firstName: 'test', lastName: 'test', company: 'test', department: 'test', position: 'test', email: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(user.id)
  expect(body.firstName).toEqual('test')
  expect(body.lastName).toEqual('test')
  expect(body.company).toEqual('test')
  expect(body.department).toEqual('test')
  expect(body.position).toEqual('test')
  expect(body.email).toEqual('test')
})

test('PUT /users/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ firstName: 'test', lastName: 'test', company: 'test', department: 'test', position: 'test', email: 'test' })
  expect(status).toBe(404)
})

test('DELETE /users/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${user.id}`)
  expect(status).toBe(204)
})

test('DELETE /users/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
