import { User } from '.'

let user

beforeEach(async () => {
  user = await User.create({ firstName: 'test', lastName: 'test', company: 'test', department: 'test', position: 'test', email: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = user.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(user.id)
    expect(view.firstName).toBe(user.firstName)
    expect(view.lastName).toBe(user.lastName)
    expect(view.company).toBe(user.company)
    expect(view.department).toBe(user.department)
    expect(view.position).toBe(user.position)
    expect(view.email).toBe(user.email)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = user.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(user.id)
    expect(view.firstName).toBe(user.firstName)
    expect(view.lastName).toBe(user.lastName)
    expect(view.company).toBe(user.company)
    expect(view.department).toBe(user.department)
    expect(view.position).toBe(user.position)
    expect(view.email).toBe(user.email)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
