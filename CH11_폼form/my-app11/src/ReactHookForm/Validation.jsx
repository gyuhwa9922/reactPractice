import React from "react";
import { useRef } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

function Validation() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  // console.log(watch("email"));

  const onSubmit = (data) => {
    console.log(data);
  };
  const password = useRef();

  password.current = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input type="email"
        name="email"
        placeholder="email을 입력해주십시오."
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && <p>이메일이 잘못되었습니다.</p>}
      <label>Name</label>
      <input type="text"
        name="name"
        placeholder="email을 입력해주십시오."
        {...register('name', { required: true, maxLength: 10 })}
      />
      {errors.name && errors.name.type === "required" && <p>필수항목 입니다.</p>}
      {errors.name && errors.name.type === "maxLength" && <p>길이 초과</p>}

      <label>Password</label>
      <input type="password"
        name="password"
        placeholder="email을 입력해주십시오."
        {...register('password', { required: true, minLength: 8 })} />
      {errors.password && errors.password.type === "required" && <p>필수항목 입니다.</p>}
      {errors.password && errors.password.type === "minLength" && <p>최소 길이를 작성하셔야 합니다.</p>}

      <label>Password Confirm</label>
      <input type="password"
        name="password_confirm"
        placeholder="email을 입력해주십시오."
        {...register('password_confirm', { required: true, validate : (value)=>value===password.current})} />
      {errors.password_confirm && errors.password_confirm.type === "required" && <p>필수항목 입니다.</p>}
      {/* {errors.password_confirm && errors.password_confirm.type === "validate" &&<p> 비밀번호가 일치하지 않습니다.</p>} */}
      {watch("password") !== watch("password_confirm") && <p>비밀번호 불일치</p>}
      <input type="submit" value={"submit"} />
    </form>
  );
}

export default Validation;