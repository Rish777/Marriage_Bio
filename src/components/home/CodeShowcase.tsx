import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeShowcase: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Python ETL code example
  const pythonCode = `# Example Airflow DAG for ETL processing
from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime, timedelta
import pandas as pd

default_args = {
    'owner': 'data_engineer',
    'depends_on_past': False,
    'email_on_failure': True,
    'email_on_retry': False,
    'retries': 1,
    'retry_delay': timedelta(minutes=5)
}

def extract_data(**kwargs):
    # Connect to source database and extract data
    df = pd.read_sql("SELECT * FROM source_table", source_engine)
    # Save to temp location
    df.to_parquet("/tmp/extracted_data.parquet")
    return "/tmp/extracted_data.parquet"

def transform_data(**kwargs):
    # Get path from previous task
    file_path = kwargs['ti'].xcom_pull(task_ids='extract')
    # Load data
    df = pd.read_parquet(file_path)
    
    # Apply transformations
    df['processed_date'] = pd.to_datetime(df['date'])
    df['amount'] = df['amount'].fillna(0)
    df['category'] = df['category'].str.upper()
    
    # Create aggregations
    summary_df = df.groupby('category').agg({'amount': 'sum'})
    
    # Save results
    summary_df.to_parquet("/tmp/transformed_data.parquet")
    return "/tmp/transformed_data.parquet"

def load_data(**kwargs):
    # Get path from previous task
    file_path = kwargs['ti'].xcom_pull(task_ids='transform')
    # Load data
    df = pd.read_parquet(file_path)
    
    # Load to target database
    df.to_sql("summary_table", target_engine, if_exists='replace')
    return "Data loaded successfully"

with DAG(
    'daily_sales_etl',
    default_args=default_args,
    description='Daily ETL job for sales data',
    schedule_interval=timedelta(days=1),
    start_date=datetime(2023, 1, 1),
    catchup=False
) as dag:
    
    extract_task = PythonOperator(
        task_id='extract',
        python_callable=extract_data,
    )
    
    transform_task = PythonOperator(
        task_id='transform',
        python_callable=transform_data,
    )
    
    load_task = PythonOperator(
        task_id='load',
        python_callable=load_data,
    )
    
    # Define task dependencies
    extract_task >> transform_task >> load_task`;

  // SQL example
  const sqlCode = `-- Data transformation using SQL for a data warehouse
-- Create a staging table for customer data
CREATE TABLE staging.customers_stg (
    customer_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20),
    address VARCHAR(255),
    city VARCHAR(50),
    state VARCHAR(2),
    zip VARCHAR(10),
    signup_date DATE,
    last_purchase_date DATE
);

-- Transform and load data into dimension table
INSERT INTO dim.customers (
    customer_sk,
    customer_id,
    full_name,
    email,
    phone,
    address,
    location_sk,
    signup_date,
    last_purchase_date,
    is_active,
    effective_date,
    expiration_date
)
SELECT 
    NEXT VALUE FOR seq.customer_sk,
    s.customer_id,
    s.first_name || ' ' || s.last_name AS full_name,
    s.email,
    s.phone,
    s.address,
    l.location_sk,
    s.signup_date,
    s.last_purchase_date,
    CASE 
        WHEN DATEDIFF(day, s.last_purchase_date, CURRENT_DATE) <= 90 THEN 1
        ELSE 0
    END AS is_active,
    CURRENT_DATE AS effective_date,
    '9999-12-31' AS expiration_date
FROM 
    staging.customers_stg s
JOIN 
    dim.locations l ON s.city = l.city AND s.state = l.state AND s.zip = l.zip
WHERE 
    NOT EXISTS (
        SELECT 1 
        FROM dim.customers c
        WHERE c.customer_id = s.customer_id
        AND c.expiration_date = '9999-12-31'
    );

-- Update history for changed records
UPDATE dim.customers
SET expiration_date = DATEADD(day, -1, CURRENT_DATE)
FROM dim.customers c
JOIN staging.customers_stg s ON c.customer_id = s.customer_id
WHERE 
    c.expiration_date = '9999-12-31'
    AND (
        c.full_name != s.first_name || ' ' || s.last_name
        OR c.email != s.email
        OR c.phone != s.phone
        OR c.address != s.address
    );`;

  return (
    <section id="code-showcase" className="section bg-background-secondary" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title inline-block">Code Examples</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Sample code snippets showcasing my work with ETL processes, data pipelines, and data transformations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background-primary rounded-lg overflow-hidden shadow-lg"
          >
            <div className="bg-background-accent px-4 py-2 flex justify-between items-center">
              <h3 className="font-medium">Python Airflow ETL Pipeline</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-error-500"></div>
                <div className="w-3 h-3 rounded-full bg-warning-500"></div>
                <div className="w-3 h-3 rounded-full bg-success-500"></div>
              </div>
            </div>
            <SyntaxHighlighter
              language="python"
              style={vscDarkPlus}
              customStyle={{ 
                margin: 0,
                padding: '1.5rem',
                fontSize: '0.9rem',
                borderRadius: '0 0 0.5rem 0.5rem',
                backgroundColor: '#1E293B'
              }}
              showLineNumbers
            >
              {pythonCode}
            </SyntaxHighlighter>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-background-primary rounded-lg overflow-hidden shadow-lg"
          >
            <div className="bg-background-accent px-4 py-2 flex justify-between items-center">
              <h3 className="font-medium">SQL Data Warehouse Transformation</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-error-500"></div>
                <div className="w-3 h-3 rounded-full bg-warning-500"></div>
                <div className="w-3 h-3 rounded-full bg-success-500"></div>
              </div>
            </div>
            <SyntaxHighlighter
              language="sql"
              style={vscDarkPlus}
              customStyle={{ 
                margin: 0,
                padding: '1.5rem',
                fontSize: '0.9rem',
                borderRadius: '0 0 0.5rem 0.5rem',
                backgroundColor: '#1E293B'
              }}
              showLineNumbers
            >
              {sqlCode}
            </SyntaxHighlighter>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;