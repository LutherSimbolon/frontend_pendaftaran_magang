import React, { useContext, useState } from "react";
import InformasiInstansi from "./Components/InformasiInstansi";
import InformasiSurat from "./Components/InformasiSurat";
import Title from "../../../../Components/Title";
import SubTitle from "../../../../Components/SubTitle";
import TextInput from "../../../../Components/TextInput";
import Button from "../../../../Components/Button";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { PostContext } from "../../../../Context/PostContext";
import { Modal } from "flowbite-react";

const TambahPengajuan = () => {
  const [openModal, setOpenModal] = useState(false);
  const { handlePost, statePost } = useContext(PostContext);

  const {
    inputPengajuan,
    setInputPengajuan,
    newPelamar,
    setNewPelamar,
    msgFile,
    msg,
    setMsg,
    setMsgForm,
    setMsgFile,
    msgForm,
  } = statePost;
  const { instansi, pelamar, surat } = inputPengajuan;

  const { handleFileChange, addPelamar, daftar } = handlePost;

  const setDataInstansi = (data) => {
    setInputPengajuan((prevInputPengajuan) => ({
      ...prevInputPengajuan,
      instansi: data,
    }));
  };

  const reset = () => {
    setMsg("");
    setMsgForm("");
    setMsgFile("");
  };

  const closeModal = () => {
    setMsgForm("");
    setOpenModal(false);
  };

  const setSuratData = (data) => {
    setInputPengajuan((prevInputPengajuan) => ({
      ...prevInputPengajuan,
      surat: data,
    }));
  };

  return (
    <>
      <Title>Tambah Pengajuan Magang</Title>
      <div className="flex justify-start items-center mt-5">
        <Button
          textColor="text-white"
          navigate="/admin/pengajuan"
          icon={<AiOutlineArrowLeft />}
          bgColor="bg-primary-blue"
          paddingY="py-2"
          paddingX="px-2.5"
          style="text-sm md:text-base lg:text-lg"
          onClick={reset}
        >
          Kembali
        </Button>
      </div>
      <div className="flex flex-col justify-start gap-8 md:gap-4">
        <InformasiInstansi
          dataInstansi={instansi}
          setDataInstansi={setDataInstansi}
        />
        <InformasiSurat
          handleFileChange={handleFileChange}
          suratData={surat}
          msgFile={msgFile}
          setSuratData={setSuratData}
        />
        <div className="bg-blue-50 mt-5 rounded py-6 px-4 md:px-8 ">
          <SubTitle>Informasi Pelamar</SubTitle>
          <div className="mx-auto lg:mx-0 md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 justify-items-center md:justify-items-stretch">
            <div className="lg:col-span-3 lg:flex lg:justify-between lg:gap-0">
              <TextInput
                label="Nama Lengkap"
                id="namaLengkap"
                style="mb-5"
                placeHolder="Masukan Nama Lengkap"
                value={newPelamar.namaLengkap}
                onChange={(e) =>
                  setNewPelamar({
                    ...newPelamar,
                    namaLengkap: e.target.value,
                  })
                }
              />
              <TextInput
                label="Alamat"
                id="alamat"
                placeHolder="Masukan Alamat"
                style="mb-5"
                value={newPelamar.alamat}
                onChange={(e) =>
                  setNewPelamar({
                    ...newPelamar,
                    alamat: e.target.value,
                  })
                }
              />
              <TextInput
                label="No Telepon"
                id="noTelepon"
                placeHolder="Masukan No Telepon"
                style="mb-5"
                value={newPelamar.noTelp}
                onChange={(e) =>
                  setNewPelamar({
                    ...newPelamar,
                    noTelp: e.target.value,
                  })
                }
              />
            </div>
            <TextInput
              label="No Induk"
              id="noInduk"
              placeHolder="Masukan No Induk"
              value={newPelamar.noInduk}
              style="mb-5"
              onChange={(e) =>
                setNewPelamar({
                  ...newPelamar,
                  noInduk: e.target.value,
                })
              }
            />
            <div className=" lg:justify-self-center">
              <TextInput
                label="Alamat Email"
                id="alamatEmail"
                placeHolder="Masukan Alamat Email"
                style="mb-5"
                value={newPelamar.email}
                onChange={(e) =>
                  setNewPelamar({ ...newPelamar, email: e.target.value })
                }
              />
            </div>
          </div>
          <p className="text-error font-bold font-roboto">{msg}</p>
        </div>
      </div>
      <div className="flex justify-end mt-5 md:flex md:justify-end">
        <Button
          icon={<AiOutlinePlus />}
          bgColor="bg-primary-blue"
          paddingY="py-2"
          paddingX="px-2.5"
          textColor="text-white"
          onClick={addPelamar}
        >
          Tambah Pelamar
        </Button>
      </div>
      {pelamar.length > 0 ? (
        <div className="mt-8 overflow-x-auto">
          <table className="table-auto w-full border border-black font-lato">
            <thead className="border border-black bg-blue-100">
              <tr>
                <th className="border border-black py-4">No</th>
                <th className="border border-black py-4">Nama Lengkap</th>
                <th className="border border-black py-4">Alamat</th>
                <th className="border border-black py-4">Nomor Telepon</th>
                <th className="border border-black py-4">Nomor Induk</th>
                <th className="border border-black py-4">Alamat Email</th>
              </tr>
            </thead>
            <tbody>
              {pelamar.map((item, index) => (
                <tr className="text-center bg-white" key={index}>
                  <td className="border border-black  p-4">{index + 1}</td>
                  <td className="border border-black p-4">
                    {item.namaLengkap}
                  </td>
                  <td className="border border-black capitalize p-4">
                    {item.alamat}
                  </td>
                  <td className="border border-black p-4">{item.noTelp}</td>
                  <td className="border border-black p-4">{item.noInduk}</td>
                  <td className="border border-black p-4">{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
      <div className="mt-5">
        <Button
          bgColor="bg-green-700"
          paddingY="py-3"
          paddingX="px-2"
          style="w-full"
          textColor="text-white text-2xl font-medium"
          onClick={() => setOpenModal(true)}
        >
          Simpan Data
        </Button>
        <Modal show={openModal} size="md" onClose={closeModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="flex justify-center">
              <HiOutlineInformationCircle size="50px" />
            </div>
            <p className="text-center text-error mt-5 mb-5 font-bold font-roboto">
              {msgForm}
            </p>
            <p className="mt-3 text-justify font-lato">
              Apakah Anda yakin ingin menyimpan data pengajuan magang ini?
              Pastikan bahwa semua informasi telah diperiksa dengan cermat
            </p>
            <div className="flex justify-end mt-5 gap-5">
              <Button
                bgColor="bg-blue-800"
                paddingY="py-1"
                paddingX="px-3"
                textColor="text-white text-lg font-medium font-lato"
                onClick={daftar}
              >
                Simpan
              </Button>
              <Button
                bgColor="bg-blue-500"
                paddingY="py-1"
                paddingX="px-4"
                textColor="text-white text-lg font-medium font-lato"
                onClick={closeModal}
              >
                Batal
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default TambahPengajuan;
