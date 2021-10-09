import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'Te@342Jdks#y',
    })
    .expect(201);
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'alskdflaskjfd',
      password: 'password',
    })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'user@mail.com',
      password: 'pa',
    })
    .expect(400);
});

it('returns a 400 for invalid password less than 8 char', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'user@mail.com',
      password: 'abc123',
    })
    .expect(400);
});

it('returns a 400 for invalid password without capital letter', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'fdgsf@gmail.com',
      password: 'paswxdf@4564634',
    })
    .expect(400);
});

it('returns a 400 for invalid password without small letter', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'fdgsf@gmail.com',
      password: 'PKHDSJK@4564634',
    })
    .expect(400);
});

it('returns a 400 for invalid password without number', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'fdgsf@gmail.com',
      password: 'PKHDSJK@sdfer',
    })
    .expect(400);
});

it('returns a 400 for invalid password without special character', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'fdgsf@gmail.com',
      password: 'PKHDSJK345435gtrert',
    })
    .expect(400);
});

it('returns a 400 with missing email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
    })
    .expect(400);

  await request(app)
    .post('/api/users/signup')
    .send({
      password: 'alskjdf',
    })
    .expect(400);
});

it('disallows duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'PA@hjsdg231',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'PA@hjsdg231',
    })
    .expect(400);
});
