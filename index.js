const categories = [
  {
    tree: {
      P1: {
        code: 'P1',
        name: 'Phong 1',
        children: ['P1-1'],
        parent: null
      },
      'P1-1': {
        code: 'P1-1',
        name: 'Phong 1-1',
        children: ['P1-1-1'],
        parent: 'P1'
      },
      'P1-1-1': {
        code: 'P1-1-1',
        name: 'Phong 1-1-1',
        children: ['P1-1-1-1'],
        parent: 'P1-1'
      },
      'P1-1-1-1': {
        code: 'P1-1-1-1',
        name: 'Phong 1-1-1-1',
        children: [],
        parent: 'P1-1-1'
      }
    }
  },
  {
    tree: {
      P2: {
        code: 'P2',
        name: 'Phong 2',
        children: ['P2-1', 'P2-2'],
        parent: null
      },
      'P2-1': {
        code: 'P2-1',
        name: 'Phong 2-1',
        children: [],
        parent: 'P2'
      },
      'P2-2': {
        code: 'P2-2',
        name: 'Phong 2-2',
        children: ['P2-2-2'],
        parent: 'P2'
      },
      'P2-2-2': {
        code: 'P2-2-2',
        name: 'Phong 2-2-2',
        children: [],
        parent: 'P2-2'
      }
    }
  }
]

const findChildren = (categories, arrChildren) => {
  const arr = []
  const temp = categories.filter((cate) => {
    return arrChildren.some((child) => cate.code === child)
  })
  temp.forEach((item) => {
    arr.push({
      ...item,
      children: findChildren(categories, item.children)
    })
  })
  return arr
}

const createListCate = (categories) => {
  let temp = []
  categories.forEach((item) => {
    temp = [...temp, ...Object.values(item.tree)]
  })

  const arr = []
  temp.forEach((element) => {
    arr.push({
      name: element.name,
      code: element.code,
      children: element.children.length > 0 ? findChildren(temp, element.children) : [],
      parent: element.parent
    })
  })
  console.log(arr.filter((item) => item.parent == null))
}

createListCate(categories)
