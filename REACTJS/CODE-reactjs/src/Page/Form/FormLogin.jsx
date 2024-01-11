import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import yup from '../../helper/yupGlobal';

import "./style1.css";

const loginSchema = yup.object().shape({
    firstName : yup
    .string()
    .required('Vui lòng nhập họ')
    .min(2, (context) => { 
        return `Nhập ${context.value} ít quá nhập lại đê`;
    })
    .max(20, (context) => {
        return `Nhập ${context.value} nhiều quá nhâp lại đê`
    }),
    lastName : yup
    .string()
    .required('Vui lòng nhập tên')
    .min(2, (context) => { 
        return `Nhập ${context.value} ít quá nhập lại đê`;
    })
    .max(20, (context) => {
        return `Nhập ${context.value} nhiều quá nhâp lại đê`
    }),
    age : yup
    .number()
    .required('Vui lòng nhập tuổi')
    .min(18, (context) => {
        return `Cấm dưới ${context.value} tuổi wed này cho 18+`
    })
})

function FormLogin(props) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginSchema)
  });

  console.log('««««« errors »»»»»', errors);

  const onSubmit = (data) => {
    // Bạn có thể gọi API để cập nhật dữ liệu ở ngay đây
    console.log(data);
};
  return (
    <form className="box" onSubmit={handleSubmit(onSubmit)}>
      <h1>login</h1>
      <div className="input-field">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Họ"
          autoComplete="off"
          {...register('firstName')}
          aria-invalid={errors.firstName ? "true" : "false"} 
        />
        {
          errors.firstName && <small className='text-danger'>{errors.firstName.message}</small>
        }
      </div>
      <div className="input-field">
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Tên"
          autoComplete="off"
          {...register('lastName')}
          aria-invalid={errors.lastName ? "true" : "false"} 
        />
        {
          errors.lastName && <small className='text-danger'>{errors.lastName.message}</small>
        }
      </div>
      <div className="input-field">
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Tuổi"
          autoComplete="off"
          {...register('age')}
          aria-invalid={errors.age ? "true" : "false"} 
        />
        {
          errors.age && <small className='text-danger'>{errors.age.message}</small>
        }
      </div>
      <div className="input-field">
        <input
          type="number"
          name=""
          id="age"
          placeholder="Tuổi"
          autoComplete="off"
          {...register('age')}
          aria-invalid={errors.age ? "true" : "false"} 
        />
        {
          errors.age && <small className='text-danger'>{errors.age.message}</small>
        }
      </div>
      
      <button type="submit" id="submit">
        LOGIN
      </button>
    </form>
  );
}
export default FormLogin;
