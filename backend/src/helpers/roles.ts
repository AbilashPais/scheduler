const roles = [
  {
    role: 'admin',
    level: 1
  },
  {
    role: 'manager',
    level: 2
  },
  {
    role: 'customer',
    level: 3
  },
  {
    role: 'guest',
    level: 4
  }
]
export const areRequestedRolesValid = (requesterRole: string, requestedRoles: string[]) => {
  const requesterLevel: any = roles.find((element: any) => {
    if (element.role == requesterRole) {
      return element.level
    }
  })
  // console.log({ requesterLevel })
  if (!requesterLevel) {
    throw new Error('Invalid requester role')
  }

  const requestedLevels = requestedRoles.map((role) => {
    return roles.find((element: any) => {
      if (element.role == role) {
        return element.level
      }
    })
  })
  // console.log({ requestedLevels })
  let isValid = false
  isValid = requestedLevels.every(function(elem: any) {
    if (elem !== undefined && elem.level > requesterLevel.level) {
      return true
    }

    return false
  })

  // console.log({ isValid })
  return isValid
}

export const getRoles = (myRole: string, relation = 'child') => {
  const relationalRole: string[] = []
  const requesterLevel: any = roles.find((element: any) => {
    if (element.role == myRole) {
      return element.level
    }
  })
  if (requesterLevel == undefined) {
    throw new Error('Invalid role')
  }

  // console.log(requesterLevel)
  roles.forEach((element: any) => {
    if (relation == 'child' && element.level > requesterLevel.level) {
      relationalRole.push(element.role)
    }
    if (relation == 'parent' && element.level < requesterLevel.level) {
      relationalRole.push(element.role)
    }
  })

  return relationalRole
}
