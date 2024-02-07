import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  console.log(phone);
  const { name, image, description, price } = phone;
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt="phone image" />
      <h2>Price: {price}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Phone;
