import React from "react";
import { useForm } from "react-hook-form";
const { register, handleSubmit } = useForm();
import Button from '../../Button'

import { PrismaClient } from '@prisma/client'

prisma = new PrismaClient()

async function find_user(data) {
  const user = await prisma.users.findUnique({where :
                     {email: {equals: email}},
                    })
  console.log(user)
}

<form onSubmit={handleSubmit(data => find_user(data))}>
    <h1>Log in</h1>
    <label>Name</label>
    <input name="name" ref={register} />
    <label>Address</label>
    <input name="address" ref={register} />
    <label>Date</label>
    <input name="date" ref={register} />
    <label>Order Number</label>
    <input name="order" ref={register} />
    <input type="submit" /> 
</form>