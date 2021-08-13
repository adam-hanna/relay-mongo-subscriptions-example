import React, { useContext, useEffect, useState, PropsWithChildren } from 'react'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import {
  Environment,
} from 'relay-runtime'

import { getEnvironment } from './environment'

interface IProps { }

const RelayContext = ({ children }: PropsWithChildren<IProps>) => {
  const environment = getEnvironment()

  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  )
}

export default RelayContext
