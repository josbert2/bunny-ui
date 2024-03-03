import React from 'react'
import { Button } from "@acme/ui";
import {Providers}  from './Providers';

export default function test() {
  return (
    <>
      <Providers>
        <div class="dark ">
            <div>test</div>
            <Button>
              Crear proyecto
            </Button>
        </div>
      </Providers>
    </>
  )
}
