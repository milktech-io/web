import React, { useEffect, useState, useRef, useCallback } from "react";
import { Stack, SimpleGrid, Text, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { authApi } from "../../../api";
import { toast } from "react-toastify";
import google from "../../../assets/google.png";
import ios from "../../../assets/ios.png";
import huawei from "../../../assets/huawei.png";
import { useTranslation } from "react-i18next";

export const Finish = () => {
  const { t } = useTranslation();

  const { user } = useSelector((store) => store);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [userName, setuserName] = useState("");

  const styles = {
    fontFamily: "Syne",
    letterSpacing: 3,
    lineHeight: 1.5,
    fontWeight: 700,
    fontSize: 13,
  };
  const buttonStyle = {
    width: "60%",
    margin: "1rem auto",
  };
  let alReadyCalled = useRef(false);

  const save = useCallback(() => {
    setError(false);
    setLoading(true);
    authApi
      .prerregister(user)
      .then(() => {
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
        toast.error(t("FinishError"), {
          theme: "dark",
        });
      });
  }, [user, t]);

  useEffect(() => {
    setuserName(user?.name ? user.name : "");
  }, [user]);
  useEffect(() => {
    if (alReadyCalled.current === true) return;

    alReadyCalled.current = true;

    save();
  }, [user, save]);

  const renderError = () => {
    return (
      <Text style={styles}>
        {t("FinishHuboError")}
        <span onClick={save}>{t("FinishReintentar")}</span>
      </Text>
    );
  };

  const renderLoading = () => {
    return (
      <Text style={styles}>
        {t("FinishEspera")}
        <span
          style={{
            color: "#282532",
            fontWeight: "800",
          }}
        >
          {t("FinishTuCuenta")}
        </span>
        .
      </Text>
    );
  };

  const download = (system) => {
    if (system === "google") {
      window.open(process.env.REACT_APP_ANDROID_URL);
    }
    if (system === "ios") {
      window.open(process.env.REACT_APP_IOS_URL);
    }
    if (system === "huawei") {
      window.open(process.env.REACT_APP_HUAWEI_URL);
    }
  };
  return (
    <>
      {error ? (
        renderError()
      ) : loading ? (
        renderLoading()
      ) : (
        <>
          <Text style={styles} fontSize={13}>
            ¡{userName}, {t("FinishTenete")}
            <span
              style={{
                color: "#282532",
                fontWeight: "800",
              }}
            >
              {t("FinishCasa")}
            </span>
            !
          </Text>

          <Stack>
            <Text style={styles} fontWeight={"700"} fontSize={11} mt={10}>
              {t("FinishCorreo")}
            </Text>
          </Stack>
          {!user.fromMobile && (
            <SimpleGrid columns={1}>
              <Box>
                <Text
                  style={styles}
                  fontWeight={"700"}
                  fontSize={11}
                  textAlign={"center"}
                  marginTop="50px"
                  color={"rgba(255,255,255,0.9)"}
                >
                  {t("FinishDescarga")}
                </Text>
              </Box>

              <Box>
                <img
                  alt=""
                  onClick={() => download("google")}
                  style={buttonStyle}
                  src={google}
                />
              </Box>

              <Box>
                <img
                  alt=""
                  onClick={() => download("ios")}
                  style={buttonStyle}
                  src={ios}
                />
              </Box>

              <Box>
                <img
                  alt=""
                  onClick={() => download("huawei")}
                  style={buttonStyle}
                  src={huawei}
                />
              </Box>
            </SimpleGrid>
          )}
        </>
      )}
    </>
  );
};
