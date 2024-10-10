import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { operations_Slice_Actions } from "../utils/redux/store";
import { useNavigate } from "react-router-dom";

export default function FavoritesPage() {
  /* const totalProducts = useSelector((state) => state.total_products); */

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* function handleOnClickBtn() {
    dispatch(operations_Slice_Actions.CHANGE_QUANTITY_TEST(2)); //works :)
  } */

  return (
    <>
      <div>Favorite Page</div>
      <button onClick={() => navigate("..")}> Go back</button>
    </>
  );
}
