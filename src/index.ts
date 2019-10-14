enum STATUS {
  PENDING,
  ONGOING,
  DELIVERED
}

interface Package {
  productName: string;
  status: STATUS;
}

function isDelivered(product: Package): Boolean {
  if (product.status === STATUS.DELIVERED) {
    return true;
  }
  return false;
}

const earphone: Package = {
  productName: 'earphone X17',
  status: STATUS.DELIVERED
}

if (isDelivered(earphone)) {
  console.log(`${earphone.productName} is already delivered`);
} else {
  console.log(`${earphone.productName} is not delivered`);
}
