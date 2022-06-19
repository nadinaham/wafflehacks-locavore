import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { PrismaClient } from '@prisma/client'
import Button from '../../Button'


prisma = new PrismaClient()

async function find_user(data) {
  const user = await prisma.users.findUnique({
    where:
                       { email: { equals: data.email } },
  })
  console.log(user)
}


const UserLogin = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // I THINK this validation should work...
    // TODO auth error if can't find
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .required('Required'),
    }),
    onSubmit: values => {
      find_user(JSON.stringify(values, null, 2))
        .catch(e => {
          throw e
        })
        .finally(async () => {
          await prisma.$disconnect()
        })
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <Button type="submit" text="let's go!" width="13vh" height="5.5vh" onClick={console.log('submitted')} />
    </form>
  )
}

export default UserLogin
