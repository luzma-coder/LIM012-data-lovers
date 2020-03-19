// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };
export const sortData = (data, sortBy, sortOrder) => {
    let newDataOrder ;
    if (sortOrder === 'a-z') {
        newDataOrder = data.sort((a,b) => {
            if (a[sortBy] > b[sortBy]) {
                // console.log('prueba 1: '+ a[sortBy]);
                // console.log ('prueba b '+ b[sortBy]);
                return 1;
              }
                return -1;
        });        
    } else {
        newDataOrder = data.sort((a, b) => {
            if (a[sortBy] < b[sortBy]) {
              return 1;
            }
              return -1;
          });
  // console.log(newDataOrder);
    }
  return newDataOrder;
  
};
