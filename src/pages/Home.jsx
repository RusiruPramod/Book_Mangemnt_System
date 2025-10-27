import React from 'react'
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 0'
        }}
      >
        <Container className='text-center'>
          <h1 className='fw-bold display-4 mb-3'>
            📚 Welcome to Library Manager
          </h1>
          <p className='lead mb-4'>
            Your modern digital library system — Manage, organize, and explore
            books effortlessly.
          </p>
          <Button
            as={Link}
            to='/books'
            variant='light'
            size='lg'
            className='fw-semibold px-4'
          >
            Browse Library
          </Button>{' '}
          <Button
            as={Link}
            to='/books/new'
            variant='outline-light'
            size='lg'
            className='fw-semibold px-4'
          >
            Add a Book
          </Button>
        </Container>
      </div>

      {/* Features Section */}
      <Container className='text-center my-5'>
        <h2 className='fw-bold mb-4'>What You Can Do</h2>
        <Row className='g-4'>
          <Col md={4}>
            <Card className='shadow-sm border-0 h-100'>
              <Card.Body>
                <Image
                  src='https://cdn-icons-png.flaticon.com/512/3143/3143643.png'
                  alt='Browse'
                  width='80'
                  className='mb-3'
                />
                <Card.Title>Browse Books</Card.Title>
                <Card.Text>
                  Explore your complete book collection in one place — search,
                  sort, and view details easily.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='shadow-sm border-0 h-100'>
              <Card.Body>
                <Image
                  src='https://cdn-icons-png.flaticon.com/512/1828/1828817.png'
                  alt='Add'
                  width='80'
                  className='mb-3'
                />
                <Card.Title>Add New Books</Card.Title>
                <Card.Text>
                  Quickly add new books with author, genre, and publication year
                  — intuitive and fast.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='shadow-sm border-0 h-100'>
              <Card.Body>
                <Image
                  src='https://cdn-icons-png.flaticon.com/512/2921/2921222.png'
                  alt='Manage'
                  width='80'
                  className='mb-3'
                />
                <Card.Title>Manage Your Library</Card.Title>
                <Card.Text>
                  Edit, update, or remove books anytime. Keep your digital
                  library perfectly organized.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* About Section */}
      <Container className='my-5'>
        <Row className='align-items-center'>
          <Col md={6}>
            <Image
              src='https://images.unsplash.com/photo-1512820790803-83ca734da794'
              fluid
              rounded
              alt='Library shelves'
            />
          </Col>
          <Col md={6}>
            <h2 className='fw-bold mb-3'>Why Library Manager?</h2>
            <p className='text-muted'>
              Library Manager is a complete book management system built for
              simplicity and efficiency. Whether you're a student, a teacher, or
              a passionate reader, you can easily manage all your favorite
              books, track authors, and maintain your collection with ease.
            </p>
            <Button as={Link} to='/books' variant='primary'>
              Get Started →
            </Button>
          </Col>
        </Row>
      </Container>

      {/* CTA Section */}
      <div
        className=' text-white py-5 text-center'
        style={{
          backgroundColor: '#6B2E1E', // SaddleBrown
          color: 'white',
          padding: '60px 0',
          textAlign: 'center'
        }}
      >
        <h3 className='fw-bold mb-3'>Ready to Organize Your Library?</h3>
        <p className='lead mb-4'>
          Join our growing community of readers and book lovers.
        </p>
        <Button as={Link} to='/books/new' variant='light' size='lg'>
          Add Your First Book
        </Button>
      </div>
    </>
  )
}
