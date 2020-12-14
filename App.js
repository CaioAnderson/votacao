import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [countFortaleza, setCountFortaleza] = useState(0);
  const [countQuixada, setCountQuixada] = useState(0);
  const [countLimoeiro, setCountLimoeiro] = useState(0);
  const [countJuazeiro, setCountJuazeiro] = useState(0);

  const VoteFortaleza = () => {
    setCountFortaleza(countFortaleza => countFortaleza + 1);
  }

  const VoteQuixada = () => {
    setCountQuixada(countQuixada => countQuixada + 1);
  }

  const VoteLimoeiro = () => {
    setCountLimoeiro(countLimoeiro => countLimoeiro + 1);
  }

  const VoteJuazeiro = () => {
    setCountJuazeiro(countJuazeiro => countJuazeiro + 1);
  }

  const [maisVotado, setMaisVotado] = useState('');
  const [menosVotado, setMenosVotado] = useState('');

  useEffect(() => {

    if (countFortaleza == countQuixada && countQuixada == countLimoeiro &&
      countLimoeiro == countJuazeiro) {
        if(countFortaleza == 0){
          setMaisVotado('Resultado não contabilizado');
        }else{
          setMaisVotado('Todos empatados');
        }
    } else {
      if (countFortaleza == countQuixada && countQuixada == countLimoeiro) {
        if (countFortaleza > countJuazeiro || countFortaleza < countJuazeiro) {
          setMaisVotado('Fortaleza, Quixadá e Limoeiro do Norte');
        }
      } else {
        if (countFortaleza == countLimoeiro && countLimoeiro == countJuazeiro) {
          if (countFortaleza > countQuixada || countFortaleza < countQuixada) {
            setMaisVotado('Fortaleza, Limoeiro do Norte e Juazeiro');
          }
        } else {
          if (countQuixada == countLimoeiro && countLimoeiro == countJuazeiro) {
            if (countQuixada > countFortaleza || countQuixada < countFortaleza) {
              setMaisVotado('Quixadá, Limoeiro do Norte e Juazeiro');
            }

          } else {
            if (countFortaleza == countQuixada) {
              if (countFortaleza > countLimoeiro && countFortaleza > countJuazeiro) {
                setMaisVotado('Quixadá e Fortaleza');
              }
            } else {
              if (countFortaleza == countLimoeiro) {
                if (countFortaleza > countQuixada && countFortaleza > countJuazeiro) {
                  setMaisVotado('Fortaleza e Limoeiro do Norte');
                }

              } else {
                if (countFortaleza == countJuazeiro) {
                  if (countFortaleza > countQuixada && countFortaleza > countLimoeiro) {
                    setMaisVotado('Fortaleza e Juazeiro');
                  }

                } else {
                  if (countQuixada == countLimoeiro) {
                    if (countQuixada > countFortaleza && countQuixada > countJuazeiro) {
                      setMaisVotado('Quixadá e Limoeiro do Norte');
                    }

                  } else {
                    if (countQuixada == countJuazeiro) {
                      if (countQuixada > countFortaleza && countQuixada > countLimoeiro) {
                        setMaisVotado('Quixadá e Juazeiro');
                      }

                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    if (countFortaleza > countQuixada && countFortaleza > countLimoeiro &&
      countFortaleza > countJuazeiro) {
        setMaisVotado('Fortaleza');
    }
    if (countQuixada > countFortaleza && countQuixada > countLimoeiro &&
      countQuixada > countJuazeiro) {
        setMaisVotado('Quixadá');
    }
    if (countLimoeiro > countQuixada && countLimoeiro > countFortaleza &&
      countFortaleza > countJuazeiro) {
        setMaisVotado('Limoeiro do Norte');
    }
    if (countJuazeiro > countQuixada && countJuazeiro > countLimoeiro &&
      countJuazeiro > countFortaleza) {
        setMaisVotado('Juazeiro');
    }



  }, [countFortaleza, countQuixada, countLimoeiro, countJuazeiro]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>VOTAÇÃO DE CIDADES</Text>

      <View style={styles.areaVotos}>
        <Text style={styles.city}>Fortaleza: {countFortaleza}</Text>
        <Text style={styles.city}>Quixadá: {countQuixada}</Text>
        <Text style={styles.city}>Limoeiro do Norte: {countLimoeiro}</Text>
        <Text style={styles.city}>Juazeiro: {countJuazeiro}</Text>
      </View>

      <View style={styles.areaResultados}>
        <Text>MAIS VOTADA(s): {maisVotado}</Text>
        <Text>MENOS VOTADA(s): </Text>
      </View>

      <View style={styles.areaButtons}>
        <TouchableOpacity style={styles.button} onPress={VoteFortaleza}>
          <Text style={styles.textButton}>FORTALEZA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={VoteQuixada}>
          <Text style={styles.textButton}>QUIXADÁ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaButtons}>
        <TouchableOpacity style={styles.button} onPress={VoteLimoeiro}>
          <Text style={styles.textButton}>LIMOEIRO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={VoteJuazeiro}>
          <Text style={styles.textButton}>JUAZEIRO</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  areaVotos: {
    marginTop: 50,
    marginLeft: 20,
    // marginBottom: 100,
  },
  areaResultados: {
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 60
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  city: {
    fontSize: 16
  },
  areaButtons: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 5,
  },
  button: {
    height: 50,
    width: 100,
    backgroundColor: "#342ef2",

    marginRight: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: "#fff",
  }
});