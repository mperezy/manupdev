type Certification = {
  id: string;
  title: string;
  issued: Date;
  issuedBy: Tech;
  certificateLink: string;
  courseLink: string;
  description: string;
};

type CertificationNew = {
  id: string;
  title: string;
  issued: Date;
  issuedBy: Tech;
  certificateLink: string;
  courseLink: string;
  description: MultiLanguageData<string>;
};
