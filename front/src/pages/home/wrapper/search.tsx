/* eslint-disable no-unused-vars */
import React from 'react';
import { Form } from 'antd';
import Input from '../../../components/Input';
import * as S from './style';
import Button from '../../../components/Button';

interface onSubmit {
  onFinish: (value: any) => void;
}
const Search: React.FC<onSubmit> = ({
  onFinish,
}: onSubmit) => {
  return (
    <Form
      layout="vertical"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <S.WrapperForm>
        <Form.Item
          name="question"
          rules={[
            { required: true, message: 'Por favor, digite algo.' },
          ]}
        >
          <Input
            type="text"
            name="question"
          />
        </Form.Item>
    
        <Button
          type="submit"
          width={120}
          height={32}
        >
          Send
        </Button>
        </S.WrapperForm>

    </Form>


  );
};
export default Search;
