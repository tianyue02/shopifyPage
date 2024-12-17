const useDiscount = ({price,discount = 0}) => {
    return (
        discount === 0 ? price : (price - (price*discount)/100)
    );
}
export default useDiscount;