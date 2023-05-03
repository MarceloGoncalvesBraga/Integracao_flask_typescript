import React, { useEffect, useState } from 'react';
import Service from "../../services/service";
import Spin from '../../components/Spin';
import Search from './wrapper/search';
import * as S from './style';

const Home: React.FC = () => {
  
  const [loading, setLoading] = useState(false);
  const [saudation, setSaudation] = useState<string | string>('Bem Vindo!');
  const [responses, setResposnses] = useState<any>([]);
 
  useEffect(() => {
    getSaudation()
  }, []);

  const getSaudation = async () => {
   try {
      setLoading(true);
      const { saudation, }: { saudation: string } = await Service.get('/saudation');
      setSaudation(saudation);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async (values: any)  => {
    try {
      setLoading(true);
      const { response, }: { response: string } = await Service.post('/search',{ ...values });
      const responses = {
        response
      };
      setResposnses(responses);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Box>
      <S.BoxTitle>
        <S.Title>
          {saudation}
        </S.Title>
      </S.BoxTitle>

      <S.BoxSearch>
        <Search
          onFinish={getData}
        />
      </S.BoxSearch>
      <S.BoxTitle>
        <S.Title>        
        {responses.response}
        </S.Title>
      </S.BoxTitle>
      
    </S.Box>

  );

}
export default Home;